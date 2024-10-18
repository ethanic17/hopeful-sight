from rest_framework import serializers
from .models import Glasses


class GlassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Glasses
        fields = ['glasses_id', 'name', 'size', 'color', 'perscription_range_upper', 'perscription_range_lower', 'image', 'inventory', 'description']

git reset --soft HEAD~
