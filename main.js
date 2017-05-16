const tree_cols = tree => {
	const list = []
	tree.map(item => {
		const list = tree_cols(item.tree)
		let cols = 1
		if (list.length) cols = list[0].reduce((accumulator, value) => {
			if (!value.cols) value.cols = 1
			return accumulator + value.cols
		}, 0)
		return [[{
			text: item.text,
			cols: cols,
		}]].concat(list)
	}).forEach(item => item.forEach((item, index) => {
		if (index < list.length) list[index] = list[index].concat(item)
		else list.push(item)
	}))
	return list
}
const tree_rows = tree => {
	return tree.map(item => {
		const list = tree_rows(item.tree)
		let rows = 1
		if (list.length) rows = list.length
		else list.push([])
		list[0].unshift({
			text: item.text,
			rows: rows,
		})
		return list
	}).reduce((accumulator, value) => {
		return accumulator.concat(value)
	}, [])
}
const tree = [
	{
		text: 'a',
		tree: [
			{
				text: 'aa',
				tree: [
					{
						text: 'aaa',
						tree: [],
					},
					{
						text: 'aab',
						tree: [],
					},
				],
			},
			{
				text: 'ab',
				tree: [
					{
						text: 'aba',
						tree: [],
					},
					{
						text: 'abb',
						tree: [],
					},
				],
			},
		],
	},
	{
		text: 'b',
		tree: [
			{
				text: 'ba',
				tree: [
					{
						text: 'baa',
						tree: [],
					},
					{
						text: 'bab',
						tree: [],
					},
				],
			},
			{
				text: 'bb',
				tree: [
					{
						text: 'bba',
						tree: [],
					},
					{
						text: 'bbb',
						tree: [],
					},
				],
			},
		],
	},
]
const cols = [
	[
		{
			text: 'a',
			cols: 4,
		},
		{
			text: 'b',
			cols: 4,
		},
	],
	[
		{
			text: 'aa',
			cols: 2,
		},
		{
			text: 'ab',
			cols: 2,
		},
		{
			text: 'ba',
			cols: 2,
		},
		{
			text: 'bb',
			cols: 2,
		},
	],
	[
		{
			text: 'aaa',
			cols: 1,
		},
		{
			text: 'aab',
			cols: 1,
		},
		{
			text: 'aba',
			cols: 1,
		},
		{
			text: 'abb',
			cols: 1,
		},
		{
			text: 'baa',
			cols: 1,
		},
		{
			text: 'bab',
			cols: 1,
		},
		{
			text: 'bba',
			cols: 1,
		},
		{
			text: 'bbb',
			cols: 1,
		},
	],
]
const rows = [
	[
		{
			text: 'a',
			rows: 4,
		},
		{
			text: 'aa',
			rows: 2,
		},
		{
			text: 'aaa',
			rows: 1,
		},
	],
	[
		{
			text: 'aab',
			rows: 1,
		},
	],
	[
		{
			text: 'ab',
			rows: 2,
		},
		{
			text: 'aba',
			rows: 1,
		},
	],
	[
		{
			text: 'abb',
			rows: 1,
		},
	],
	[
		{
			text: 'b',
			rows: 4,
		},
		{
			text: 'ba',
			rows: 2,
		},
		{
			text: 'baa',
			rows: 1,
		},
	],
	[
		{
			text: 'bab',
			rows: 1,
		},
	],
	[
		{
			text: 'bb',
			rows: 2,
		},
		{
			text: 'bba',
			rows: 1,
		},
	],
	[
		{
			text: 'bbb',
			rows: 1,
		},
	],
]
console.dir(tree_cols(tree))
console.dir(tree_rows(tree))
