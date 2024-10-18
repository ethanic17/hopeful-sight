from rest_framework import serializers
from .models import Donator


class DonatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donator
        fields = ['donator_id', 'has_donated', 'total_amount_donated', 'account']