from rest_framework import serializers
from .models import CustomUser
from account.models import Account
from donatee.models import Donatee
from donator.models import Donator

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['account_id', 'user', 'phone_number', 'address', 'city', 'state', 'zip_code']
        ref_name = 'CustomUserAccountSerializer'  # Unique ref_name to avoid conflicts

class DonatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donator
        fields = ['donator_id', 'account']
        ref_name = 'CustomUserDonatorSerializer'  # Unique ref_name to avoid conflicts

class DonateeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donatee
        fields = ['donatee_id', 'account']
        ref_name = 'CustomUserDonateeSerializer'  # Unique ref_name to avoid conflicts

class CustomUserMeSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True)
    donator = DonatorSerializer(read_only=True)
    donatee = DonateeSerializer(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'account', 'donator', 'donatee']

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']
