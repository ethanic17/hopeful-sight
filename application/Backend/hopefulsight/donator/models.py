from django.db import models
from account.models import Account

class Donator(models.Model):
    donator_id = models.AutoField(primary_key=True)  
    has_donated = models.BooleanField(default=False)
    total_amount_donated = models.FloatField(default=0.0)
    account = models.OneToOneField(Account, on_delete=models.CASCADE, related_name="donator")

    def __str__(self):
        return f"{self.donator_id}"
    
    @property
    def calculate_total_donation(self):
        return self.donations.aggregate(total_donation=models.Sum('amount'))['total_donation'] or 0.0
