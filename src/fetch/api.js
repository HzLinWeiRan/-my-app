function conversion(url, method) {
    return {
        url,
        method
    };
}

// ajax通用配置
export default {
    news: conversion(`/news${window.suffix}`, 'get')
};
