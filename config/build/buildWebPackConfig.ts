import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoders} from "./buildLoders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebPackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoders(options)
        },
        resolve: buildResolves(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}