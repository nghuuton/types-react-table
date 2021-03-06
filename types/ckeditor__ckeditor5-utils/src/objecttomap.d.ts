/**
 * Transforms object to map.
 *
 *  const map = objectToMap( { 'foo': 1, 'bar': 2 } );
 *  map.get( 'foo' ); // 1
 *
 * **Note**: For mixed data (`Object` or `Iterable`) there's a dedicated {@link module:utils/tomap~toMap} function.
 *
 */
export default function objectToMap<T extends Record<any, any>, K extends keyof T>(obj: T): Map<K, T[K]>;
