from django.db import models

# Create your models here.

class Region(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    total_donation = models.FloatField(default=0)

    def __str__(self):
        return self.name
    