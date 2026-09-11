<template>
  <DetailPage
    section="旅人故事"
    :item="item"
    :pending="pending"
    schema="Article"
    action-label="分享这段故事"
    :action-notice="shareNotice"
    @action="share"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
import type { PlaceRecord } from "~/types/api";
const route = useRoute();
const { request } = useApi();
const { data: item, pending } = useAsyncData(`post-${route.params.id}`, () =>
  request<PlaceRecord>(`/app/community/post/${route.params.id}/detail`).catch(
    () => null,
  ),
);
const shareNotice = ref("");
async function share(post: PlaceRecord) {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: String(post.title || "乌东旅记"), url });
      shareNotice.value = "分享已发起";
      return;
    }
    await navigator.clipboard.writeText(url);
    shareNotice.value = "链接已复制，可发送给同行的人";
  } catch {
    shareNotice.value = "分享未完成，请复制当前页面地址";
  }
}
</script>
