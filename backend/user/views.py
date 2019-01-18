from django.contrib import admin
from rest_framework import viewsets, permissions, generics

from .serializers import ProfileSerializer
from .models import Profile

admin.site.register(Profile)


class ProfileView(generics.RetrieveAPIView):
    """
    View used to retrieve read-only data.
    """
    serializer_class = ProfileSerializer


class ProfileCreateView(generics.ListAPIView):
    """
    View used to create profile.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]


class ProfileUpdateView(generics.UpdateAPIView):
    """
    View used to edit user profile.
    """
    queryset = Profile.objects.all()
    model = Profile
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfileSerializer
