"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework import serializers, viewsets, routers, permissions
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from django.conf.urls.static import static

from backend import settings
from backend.job.views import JobViewSet, CreateJobView, UpdateJobView, JobListView
from backend.user.views import ProfileView, ProfileCreateView, ProfileUpdateView


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_staff=validated_data['is_staff'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'password')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserView(CreateAPIView):

    model = User
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'api/', include(router.urls)),
    url(r'^api/register', CreateUserView.as_view(), name='api-register'),  #sdas
    url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^api/token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
    url(r'^api/user/profile/$', ProfileCreateView.as_view(), name='create_profile'),
    url(r'^api/user/(?P<pk>\d+)/profile/$', ProfileView.as_view(), name='profile'),
    url(r'^api/user/(?P<pk>\d+)/profile/update/$', ProfileUpdateView.as_view(), name='profile_update'),
    url(r'api/job/get', JobViewSet.as_view(), name='job_get'),
    url(r'api/job/list', JobListView.as_view(), name='job_list'),
    url(r'api/job/create', CreateJobView.as_view(), name='job_create'),
    url(r'api/job/(?P<pk>\d+)/update', UpdateJobView.as_view(), name='job_create'),
    url(r'auth/', include('rest_framework_social_oauth2.urls')),
    path('admin/', admin.site.urls),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
