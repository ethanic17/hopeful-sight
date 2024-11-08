from django.shortcuts import get_object_or_404
from django.db.models import Sum
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Region
from .serializers import RegionSerializer

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

    @action(detail=True, methods=["GET"])
    def donations_summary(self, request, pk=None):
        region = get_object_or_404(Region, pk=pk)
        region.total_donations = region.regions.aggregate(total=Sum("amount"))["total"] or 0
        serializer = self.get_serializer(region)
        return Response(serializer.data)
