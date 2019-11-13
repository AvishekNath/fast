/**
 * Configuration object provided to the use-transition
 * utility. Describes the transition and CSS properties
 * to transition between
 */
interface UseAnimationConfig {
    /**
     * The duration of the transition. When value is an array, the first index
     * describes the 'activating' duration and the second describes the
     * 'deactiving' duration
     */
    duration: number | [number, number];

    /**
     * The delay of the transition. When value is an array, the first index
     * describes the 'activating' delay and the second describes the
     * 'deactiving' delay
     */
    delay?: number | [number, number];

    /**
     * The timing function of the transition. When value is an array, the first index
     * describes the 'activating' timing function and the second describes the
     * 'deactiving' timing function
     */
    timingFunction: string | [string, string];

    /**
     * The CSS properties to apply in the 'inactive' state
     */
    inactive: React.CSSProperties;

    /**
     * The CSS properties to apply in the 'active' state
     */
    active: React.CSSProperties;

    /**
     * The CSS properties to apply to reach the 'inactive'
     * state from the 'active' state. If this property is not
     * supplied, it will default to the 'inactive' properties.
     * Use this when the transition *to* the active state is
     * different then the transition *from* the active state
     */
    deactivating?: React.CSSProperties;
}

/**
 * Returns class-names to apply to the transitioning component.
 * Classes will apply CSS properties and animation based on the 'active' argument,
 * transitioning from
 */
export function useTransition(
    active: boolean,
    config: UseAnimationConfig,
    transitionIn: boolean = false
): void {}