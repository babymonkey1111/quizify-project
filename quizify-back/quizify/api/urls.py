from django.urls import path

from . import views

urlpatterns = [
    path("create-quiz/", views.create_quiz_api_view, name="quiz_create"),
    path("latest-quizzes/", views.latest_quizzes_list_api_view, name="latest_quizzes"),
    path("top-quizzes/", views.top_quizzes_list_api_view, name="top_quizzes"),
    path(
        "quizzes/<int:quiz_id>/like/",
        views.like_quiz_create_api_view,
        name="quiz_like",
    ),
    path(
        "quizzes/<int:quiz_id>/like/",
        views.like_quiz_create_api_view,
        name="quiz_like",
    ),
    path(
        "quizzes/<int:quiz_id>/likes/<int:like_id>/",
        views.dislike_quiz_destroy_api_view,
        name="quiz_dislike",
    ),
    path(
        "quizzes/<int:quiz_id>/",
        views.quiz_retrieve_api_view,
        name="quiz_retrieve",
    ),
    path(
        "quizzes/<int:quiz_id>/latest-participations/",
        views.quiz_latest_participations_list_api_view,
        name="quiz_latest_participations",
    ),
    path(
        "quizzes/<int:quiz_id>/top-participations/",
        views.quiz_top_participations_list_api_view,
        name="quiz_top_participations",
    ),
    path(
        "check-answer/",
        views.check_answer_api_view,
        name="check_answer",
    ),
]


# Topics

urlpatterns += [
    path("topics/", views.topic_list_api_view, name="topic_list"),
    path(
        "topics/<int:topic_id>/", views.topic_retrieve_api_view, name="topic_retrieve"
    ),
    path(
        "topics/<int:topic_id>/top-quizzes/",
        views.topic_top_quizzes_list_api_view,
        name="topic_top_quizzes",
    ),
    path(
        "topics/<int:topic_id>/latest-quizzes/",
        views.topic_latest_quizzes_list_api_view,
        name="topic_latest_quizzes",
    ),
    path(
        "topics/<int:topic_id>/subscribe/",
        views.subscribe_to_topic_api_view,
        name="topic_subscribe",
    ),
    path(
        "topics/<int:topic_id>/unsubscribe/",
        views.unsubscribe_to_topic_api_view,
        name="topic_unsubscribe",
    ),
]


# Notifications

urlpatterns += [
    path(
        "all-notifications/",
        views.all_notifications_list_api_view,
        name="all_notifications",
    ),
    path(
        "unread-notifications/",
        views.unread_notifications_list_api_view,
        name="unread_notifications",
    ),
    path(
        "notifications/<int:notif_id>/mark-as-read/",
        views.mark_notification_as_read_api_view,
        name="mark_notification_as_read",
    ),
]
