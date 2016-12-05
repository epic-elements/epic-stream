import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/xstream.js',
  dest: 'xstream.js',
  moduleName: 'xs',
  // moduleId: 'EpicObservable',
  format: 'iife',
  plugins: [ 
	  babel(), 
	  nodeResolve({ jsnext: true }),
	  commonjs({ include: 'node_modules/**' }) 
  ]
};
