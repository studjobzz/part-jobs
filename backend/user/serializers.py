from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    """
    Class used to serialize to retrieve data from model to return a json with given fields.
    """
    class Meta:
        model = Profile
        fields = ('pk', 'address', 'phone_number', 'description', 'birthday',
                  'sex', 'status', 'user', 'image', 'user_cv')
