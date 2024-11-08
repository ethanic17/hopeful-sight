from django.db import models
from donator.models import Donator
from region.models import Region

class Donation(models.Model):
    donation_id = models.AutoField(primary_key=True)
    amount = models.FloatField(null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    donator = models.ForeignKey(Donator, on_delete=models.CASCADE, related_name="donations")
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name="regions")

    def __str__(self):
        return f"Donation {self.donation_id} - Amount: {self.amount}"
    
    def save(self, *args, **kwargs):
        # Ensure a Donator record exists for the associated account
        if not Donator.objects.filter(account=self.donator.account).exists():
            self.donator = Donator.objects.create(account=self.donator.account)

        # Save the donation
        super().save(*args, **kwargs)

        # Update the Donator's total amount donated
        self.donator.total_amount_donated = self.donator.calculate_total_donation
        self.donator.has_donated = self.donator.total_amount_donated > 0
        self.donator.save()
