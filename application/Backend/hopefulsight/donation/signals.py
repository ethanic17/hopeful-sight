# donation/signals.py
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Sum
from .models import Donation
from region.models import Region

@receiver(post_save, sender=Donation)
def update_region_total_donation_on_save(sender, instance, **kwargs):
    # Recalculate total donation for the region whenever a donation is saved
    region = instance.region
    region.total_donation = region.regions.aggregate(total=Sum('amount'))['total'] or 0
    region.save()

@receiver(post_delete, sender=Donation)
def update_region_total_donation_on_delete(sender, instance, **kwargs):
    # Recalculate total donation for the region whenever a donation is deleted
    region = instance.region
    region.total_donation = region.regions.aggregate(total=Sum('amount'))['total'] or 0
    region.save()
