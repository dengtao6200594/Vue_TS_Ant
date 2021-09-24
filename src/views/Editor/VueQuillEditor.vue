<template>
	<div class="editor">
		<Tinymce5 ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick" />
	</div>
</template>

<script>
import Tinymce5 from '@/components/Editor/Tinymce5.vue'
export default {
	name: 'Editor',
	components: {
		Tinymce5
	},
	data() {
		return {
			disabled: false,
			msg: 'Welcome to Use Editor'
		}
	},
	methods: {
		// 鼠标单击的事件
		onClick(e, editor) {
			console.log('Element clicked')
			console.log(e)
			console.log(editor)
		}
	}
}
</script>

<style></style>
