from django.db import models
from account.models import Account

# Create your models here.
class Glasses(models.Model):
    glasses_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    size = models.IntegerField()
    color = models.CharField(max_length=50)
    perscription_range_upper = models.FloatField(null=True, blank=True)
    perscription_range_lower = models.FloatField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    inventory = models.IntegerField()
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.glasses_id}"
