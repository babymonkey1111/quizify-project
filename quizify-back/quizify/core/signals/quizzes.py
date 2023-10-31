from django.db.models.signals import post_save
from django.dispatch import receiver
from notifications.signals import notify

from core.models import Quiz, User


@receiver(post_save, sender=Quiz)
def notify_topic_subscribers(sender, created, instance, **kwargs):
    print("notify_topic_subscribers signals")
    if created:
        topic = instance.topic
        subscribers_ids = list(topic.subscriptions.values_list("user__id", flat=True))
        subscribers = User.objects.filter(id__in=subscribers_ids).exclude(
            id=instance.created_by.id
        )
        notify.send(
            sender=instance.created_by,
            recipient=subscribers,
            verb="shared",
            action_object=instance,
            target=instance.topic,
            timestamp=instance.created_at,
        )
