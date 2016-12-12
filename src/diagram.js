function diagram(source$, options) {
	/**
	 *
	 * values = {o:{}}
	 * s:  o 
	 * r$: o|
	 */
	const options$ = xs.of(options || {});

	/**
	 *
	 * values = {d:{timeUnit: 20}}
	 * 
	 * s:  d
	 * r$: d|
	 */
	const defaults$ = xs.of({
		timeUnit: 20
	});

	/**
	 * config$
	 *
	 * values = {	o:{values: {}},
	 *				d:{timeUnit: 20},
	 *				a:[{values: {}},{timeUnit: 20}],
	 *				c:{values: {}, timeUnit: 20}}
	 *
	 * source1$: d|
	 * source2$: o|
	 * 
	 * result$:  c|	 
	 */
	const config$ = xs
		.combine(defaults$, options$)
		.map(a => Object.assign({}, a[0], a[1]))


	/**
	 * values$
	 *
	 * values
	 * c:'Contessa'
	 * a:'Alex'
	 * q:[Contessa,1]
	 * w:[Alex,3]
	 * e:[Contessa,5]
	 * r:[Alex,6]
	 * t:[Alex,7]
	 * y:[Contessa,8]
	 * u:[Alex,9]
	 * a:'Alex'
	 * Q:{value:'Contessa',frame:1}
	 * W:{value:'Alex',frame:3}
	 * E:{value:'Contessa',frame:5}
	 * R:{value:'Alex',frame:6}
	 * T:{value:'Alex',frame:7}
	 * Y:{value:'Contessa',frame:8}
	 * U:{value:'Alex',frame:9}
	 *
	 *
	 * 
	 * s1$ (source$): --c--a-c-a-a-c--a| 
	 * s2$ (frames$): -1-2-3-5-6-7-8-9-> 
	 * r$: (values$): -Q---W-E-R-T-Y--U|
	 */
	const values$ = source$ //--c--a-c-a-a-c--a|
		.compose(xs //-1-2-3-5-6-7-8-9->
			.sampleCombine(ticks)) //-q---w-e-r-t-y--u|
		.map(v => ({ //-Q---W-E-R-T-Y--U|
			frame: v[1],
			value: v[0]
		}));



	/**
	 * timeUnit$
	 *
	 * values
	 * c:{timeUnit:20}
	 * t:20
	 *
	 * timeUnitStream(c|)
	 * t|
	 */
	const timeUnit$ = config$
		.map(config => config.timeUnit) // t|
		.remember()

	/**
	 * frames$
	 *
	 * t:20
	 *
	 * framesStream(t|)
	 * -1-2-3-5-6-7-8-9->
	 */
	const frames$ = timeUnit$
		.map(t => xs.periodic(t))
		.flatten();



	//-Q---W-E-R-T-Y--U|
	// const frames = source.last();
	//----------------U|
	// .map(v => new Array(v.frame).fill('-'));
	//-Q---W-E-R-T-Y--U|




	return frames$ //s.create(new DiagramProducer(stream, config));
};
