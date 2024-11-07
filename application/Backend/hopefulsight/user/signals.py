from django.db.models.signals import post_save
from django.dispatch import receiver
from account.models import Account
from user.models import CustomUser

@receiver(post_save, sender=CustomUser)
def create_user_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(user=instance)
