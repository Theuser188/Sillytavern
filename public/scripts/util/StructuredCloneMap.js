/**
 * A specialized Map class that provides consistent data storage by performing deep cloning of values.
 *
 * @template K, V
 * @extends Map<K, V>
 */
export class StructuredCloneMap extends Map {
    /**
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
     *
     * The set value will always be a deep clone of the provided value to provide consistent data storage.
     *
     * @param {K} key - The key to set
     * @param {V} value - The value to set
     * @returns {this} The updated map
     */
    set(key, value) {
        const clonedValue = structuredClone(value);
        super.set(key, clonedValue);
        return this;
    }

    /**
     * Returns a specified element from the Map object.
     * If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
     *
     * The returned value will always be a deep clone of the cached value.
     *
     * @param {K} key - The key to get the value for
     * @returns {V | undefined} Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
    get(key) {
        const value = super.get(key);
        return structuredClone(value);
    }
}