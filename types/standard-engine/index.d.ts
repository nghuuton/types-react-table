// Type definitions for standard-engine 12.0
// Project: https://github.com/flet/standard-engine
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import eslint = require('eslint');

declare namespace standardEngine {
    interface LintReport {
        results: eslint.ESLint.LintResult[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        usedDeprecatedRules: eslint.ESLint.DeprecatedRuleUse[];
    }

    class Linter {
        constructor(opts?: LinterOptions);
        /**
         * Lint the provided source text to enforce your defined style.
         * An opts object may be provided
         */
        lintTextSync(text: string, opts?: LintTextOptions): LintReport;
        lintText(text: string, opts: LintTextOptions, callback: LintCallback): void;
        lintText(text: string, callback: LintCallback): void;

        /**
         * Lint the provided files globs.
         * An opts object may be provided
         */
        lintFiles(files: string | string[], callback: LintCallback): void;
        lintFiles(files: string | string[], opts: LintFilesOptions | undefined, callback: LintCallback): void;
    }
}

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type PickWithSomeRequired<T, TRequired extends keyof T> = Omit<T, TRequired> & Pick<Required<T>, TRequired>;

export type ParseOptions = PickWithSomeRequired<
    Options & { eslintConfig: ESLintConfig },
    'ignore' | 'cwd' | 'fix' | 'eslintConfig'
>;

export interface LinterOptions {
    bugs?: string | undefined;
    cmd: string;
    /** @default process.cwd() */
    cwd?: string | undefined;
    eslint: typeof eslint;
    eslintConfig?: ESLintConfig | undefined;
    homepage?: string | undefined;
    /**
     * This function is called with the current options object (opts),
     * any options extracted from the project's package.json (packageOpts),
     * and the directory that contained that package.json file
     * (rootDir, equivalent to opts.cwd if no file was found).
     * Modify and return opts, or return a new object with the options that are to be used.
     */
    parseOpts?: ((opts: ParseOptions, packageOpts: any, rootDir: string) => ParseOptions) | undefined;
    tagline?: string | undefined;
    version?: string | undefined;
}

export interface ESLintConfig {
    /** @default true */
    cache?: boolean | undefined;
    /** @default  path.join(HOME_OR_TMP, `.${this.cmd}-v${majorVersion}-cache/` */
    cacheLocation?: string | undefined;
    configFile?: string | undefined;
    /** @default [] */
    envs?: string[] | undefined;
    /** @default false */
    fix?: boolean | undefined;
    /** @default [] */
    globals?: string[] | undefined;
    /** @default false */
    ignore?: boolean | undefined;
    /** @default [] */
    plugins?: string[] | undefined;
    /** @default false */
    useEslintrc?: boolean | undefined;
}

/**
 * This is the full set of options accepted by the above APIs.
 * Not all options make sense for each API
 */
export interface Options {
    /**
     * file globs to ignore
     * @default []
     */
    ignore?: string[] | undefined;
    /**
     * current working directory
     * @default process.cwd()
     */
    cwd?: string | undefined;
    /** path of the file containing the text being linted */
    filename?: string | undefined;
    /**
     * automatically fix problems
     * @default false
     */
    fix?: boolean | undefined;
    /**
     * custom global variables to declare
     * @default [];
     */
    global?: string | string[] | undefined;
    /**
     * custom global variables to declare
     * @default [];
     */
    globals?: string | string[] | undefined;
    /**
     * custom eslint plugins
     * @default []
     */
    plugin?: string | string[] | undefined;
    /**
     * custom eslint plugins
     * @default []
     */
    plugins?: string | string[] | undefined;
    /**
     * custom eslint environment
     * @default []
     */
    env?: string | string[] | undefined;
    /**
     * custom eslint environment
     * @default []
     */
    envs?: string | string[] | undefined;
    /** custom js parser (e.g. babel-eslint) */
    parser?: string | undefined;
}

export interface LintDefaultOptions {
    /**
     * use options from nearest package.json?
     * @default true
     */
    usePackageJson?: boolean | undefined;
}

export type LintTextOptions = Exclude<Options, 'ignore' | 'cwd'> & LintDefaultOptions;

export type LintFilesOptions = Exclude<Options, 'cwd' | 'filename'> & LintDefaultOptions;
export interface LintReport {
    results: eslint.ESLint.LintResult[];
    errorCount: number;
    warningCount: number;
    fixableErrorCount: number;
    fixableWarningCount: number;
    usedDeprecatedRules: eslint.ESLint.DeprecatedRuleUse[];
}

export type LintCallback = (error: Error | null, results: LintReport) => void;

// exported from `standard-engine`

export function cli(opts: LinterOptions): void;

export const linter: typeof standardEngine.Linter;

// added to prevent automatic export of standardEngine namespace
export {};
