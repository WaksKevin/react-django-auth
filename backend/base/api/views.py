from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import NoteSerializer


class GetRoutes(APIView):
    def get(self, request):
        routes = [
            "/api/token",
            "/api/token/refresh",
        ]
        return Response(routes)


class GetNotes(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        notes = user.note_set.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
