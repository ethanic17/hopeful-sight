from django.db import models
from user.models import CustomUser

# Create your models here.
class Account(models.Model):
    account_id = models.AutoField(primary_key=True, unique=True)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    
    @property
    def location(self):
        return f"{self.city}, {self.state} {self.zip_code}"

    def __str__(self):
        return f"Account {self.user}"  # Fallback if no user is associated
