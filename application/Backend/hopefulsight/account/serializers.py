from rest_framework import serializers
from .models import Account
from donator.serializers import DonatorSerializer
from donatee.serializers import DonateeSerializer

class AccountSerializer(serializers.ModelSerializer):
    donator = DonatorSerializer(read_only=True)
    donatee = DonateeSerializer(read_only=True)

    class Meta:
        model = Account
        fields = ['account_id', 'user', 'phone_number', 'address', 'city', 'state', 'zip_code', 'donator', 'donatee']
