from django.db import models
from account.models import Account

# Create your models here.
class Donator(models.Model):
    donator_id = models.AutoField(primary_key=True)  
    has_donated = models.BooleanField(default=False)
    total_amount_donated = models.FloatField(default=0.0)
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.donator_id}"
