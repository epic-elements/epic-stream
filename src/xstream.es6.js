import xs from 'xstream'
import tween from 'xstream/extra/tween'
import concat from 'xstream/extra/concat'
import fromDiagram from 'xstream/extra/fromDiagram'
import fromEvent from 'xstream/extra/fromEvent'
import debounce from 'xstream/extra/debounce'
import delay from 'xstream/extra/delay'
import dropRepeats from 'xstream/extra/dropRepeats'
import dropUntil from 'xstream/extra/dropUntil'
import flattenConcurrently from 'xstream/extra/flattenConcurrently'
import flattenSequentially from 'xstream/extra/flattenSequentially'
import pairwise from 'xstream/extra/pairwise'
import sampleCombine from 'xstream/extra/sampleCombine'
import split from 'xstream/extra/split'
import throttle from 'xstream/extra/throttle'

xs.tween = tween;
xs.concat = concat;
xs.fromDiagram = fromDiagram;
xs.fromEvent = fromEvent;
xs.debounce = debounce;
xs.delay = delay;
xs.dropRepeats = dropRepeats;
xs.dropUntil = dropUntil;
xs.flattenConcurrently = flattenConcurrently;
xs.flattenSequentially = flattenSequentially;
xs.pairwise = pairwise;
xs.sampleCombine = sampleCombine;
xs.split = split;
xs.throttle = throttle;

export default xs
