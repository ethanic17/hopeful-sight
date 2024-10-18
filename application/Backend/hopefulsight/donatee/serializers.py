from rest_framework import serializers
from .models import Donatee

class DonateeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donatee
        fields = [
            'donatee_id', 'has_applied_for_account', 'has_claimed', 'account', 'monthly_income', 'average_household_income', 'current_bank_balance', 'is_dependent', 'prescription'
        ]