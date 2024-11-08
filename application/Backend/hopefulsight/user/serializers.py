# user/serializers.py
from rest_framework import serializers
from .models import CustomUser
from account.serializers import AccountSerializer

class CustomUserSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True)  # Include Account, which nests Donator and Donatee

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'account']

class CustomUserMeSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True)  # Include Account, which nests Donator and Donatee

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'account']

