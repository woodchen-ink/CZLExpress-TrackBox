var trackindexbox = new Vue({
			el: '#trackindexbox',
			data: {
				qvalue: true,
				tableData: [],
				isPc: true,
				searchResult: false,
				product_name_width: 180,
				textareaHeight: 1,
				ruleForm: {
					danhao: '',
				},
				postData: '',
				rules: {
					danhao: [
						{
							required: true,
							message: '单号不能为空',
							trigger: 'change',
						},
					],
				},
			},
			watch: {
				'ruleForm.danhao': function (val) {
					{
						var patt1 = new RegExp(/\n/g)
						if (patt1.test(val)) {
							this.postData = val.replace(/\n/g, '%0D%0A') + '%0D%0A'
							this.textareaHeight = this.postData.split('%0D%0A').length - 1
							console.log(this.postData.split('%0D%0A').length - 1)
							this.postData = this.postData.toUpperCase()
						} else {
							this.postData = val
							this.textareaHeight = 1
							this.postData = this.postData.toUpperCase()
						}
					}
				},
			},
			created() {},
			mounted() {},
			methods: {
				//表格展开
				toogleExpand(row) {
					let $table = this.$refs.table
					this.tableData.map(item => {
						if (row.product_id != item.product_id) {
							$table.toggleRowExpansion(item, false)
						}
					})
					$table.toggleRowExpansion(row)
				},
				jumpUrl() {
					//参数配置
					let url = 'https://www.czl.net/track'
					url += '/?query=' + this.postData
					console.log('跳转链接', url)
					window.open(url)
				},
			},
		})
