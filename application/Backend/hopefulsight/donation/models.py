from django.db import models
from account.models import Account
from region.models import Region

# Create your models here.
class Donation(models.Model):
    donation_id = models.AutoField(primary_key=True, null=False, blank=False)
    amount = models.FloatField(null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    account_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name="donations")

    def __str__(self):
        return f"{self.donation_id}"