from rest_framework import serializers
from .models import Donator
from donation.serializers import DonationSerializer


class DonatorSerializer(serializers.ModelSerializer):
    donations = DonationSerializer(many=True, read_only=True)

    class Meta:
        model = Donator
        fields = ['donator_id', 'has_donated', 'total_amount_donated', 'donations', 'account']