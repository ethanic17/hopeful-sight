from rest_framework import serializers
from .models import CustomUser
from account.models import Account
from donatee.models import Donatee
from donator.models import Donator

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['account_id', 'user', 'phone_number', 'address', 'city', 'state', 'zip_code']

class DonatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donator
        fields = ['donator_id', 'account_id']

class DonateeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donatee
        fields = ['donatee_id', 'account_id']

class CustomUserMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'account', 'donator', 'donatee']

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']