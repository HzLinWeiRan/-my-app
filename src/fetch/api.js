function conversion(url, method) {
    return {
        url,
        method
    };
}

// ajax通用配置
export default {
    list: conversion('/users/list.json', 'post'),
    list2: conversion('/users/list.json', 'get')
};
