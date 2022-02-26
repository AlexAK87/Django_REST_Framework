from rest_framework.viewsets import ModelViewSet
from .models import UserToDo
from .serializers import UserToDoModelSerializer


class UserToDoModelViewSet(ModelViewSet):
    queryset = UserToDo.objects.all()
    serializer_class = UserToDoModelSerializer
