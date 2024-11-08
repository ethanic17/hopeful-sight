from django.db import models
from account.models import Account
from glasses.models import Glasses

# Create your models here.
class Donatee(models.Model):
    donatee_id = models.AutoField(primary_key=True)
    has_applied_for_account = models.BooleanField(default=False)
    has_claimed = models.BooleanField(default=False)
    account = models.OneToOneField(Account, on_delete=models.CASCADE, related_name="donatee")
    monthly_income = models.FloatField(null=True, blank=True)
    average_household_income = models.FloatField(null=True, blank=True)
    current_bank_balance = models.FloatField(null=True, blank=True)
    is_dependent = models.BooleanField(default=True)
    prescription = models.ImageField(null=True, blank=True)
    glasses_id = models.ForeignKey(Glasses, on_delete=models.CASCADE, null=True, blank=True)


    def __str__(self):
        return f"{self.donatee_id}"
    
