# account/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Account
from donator.models import Donator
from donatee.models import Donatee

@receiver(post_save, sender=Account)
def create_donator_and_donatee(sender, instance, created, **kwargs):
    if created:
        # Ensure Donator is linked to Account
        donator, created_donator = Donator.objects.get_or_create(account=instance)
        donatee, created_donatee = Donatee.objects.get_or_create(account=instance)
        