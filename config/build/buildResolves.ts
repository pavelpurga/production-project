import webpack from 'webpack';

export function buildResolves() : webpack.ResolveOptions {

    return {
    extensions: ['.js', '.ts', '.tsx'],
}
}