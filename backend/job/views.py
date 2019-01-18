from django.contrib import admin

from .models import Job
from .serializers import JobSerializer
from rest_framework import viewsets, permissions
from rest_framework.generics import CreateAPIView, UpdateAPIView

admin.site.register(Job)


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(validated=False)
    serializer_class = JobSerializer


class CreateJobView(CreateAPIView):

    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer


class UpdateJobView(UpdateAPIView):
    queryset = Job.objects.all()
    model = Job
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer
