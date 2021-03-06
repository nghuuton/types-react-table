// Type definitions for lerna-get-packages 1.0
// Project: https://github.com/azz/lerna-get-packages
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LernaPackage {
    location: string;
    package: {
        private?: boolean | undefined;
        version: string;
        name: string;
        dependencies: Record<string, string>;
        main?: string | undefined;
        config?: {
            additionalTsTypings?: string[] | undefined;
        } | undefined;
    };
}
declare function lernaGetPackages(path: string): LernaPackage[];
export = lernaGetPackages;
