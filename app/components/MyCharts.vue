<script setup lang="ts">
import * as echarts from 'echarts';

const data = [
    {
        name: 'Frontend',
        itemStyle: {
            color: '#0ab8f2'
        },
        children: [
            {
                name: 'PHP',
                itemStyle: {
                    color: '#4F5D95'
                },
                children: [
                    {
                        name: 'Laravel',
                        value: 1,
                        itemStyle: {
                            color: '#f55247'
                        }
                    },
                    {
                        name: 'Codeigniter',
                        value: 1,
                        itemStyle: {
                            color: '#d24114'
                        }
                    }
                ]
            },
            {
                name: 'Javascript',
                itemStyle: {
                    color: '#f1e05a'
                },
                children: [
                    {
                        name: 'NuxtJs',
                        value: 1,
                        itemStyle: {
                            color: '#f55247'
                        }
                    },
                    {
                        name: 'NextJs',
                        value: 1,
                        itemStyle: {
                            color: '#f55247'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Backend',
        itemStyle: {
            color: '#5a7078'
        },
        children: [
            {
                name: 'PHP',
                itemStyle: {
                    color: '#4F5D95'
                },
                children: [
                    {
                        name: 'Laravel',
                        value: 1,
                        itemStyle: {
                            color: '#4F5D95'
                        }
                    },
                    {
                        name: 'Laravel Lumen',
                        value: 1,
                        itemStyle: {
                            color: '#01c089'
                        }
                    }
                ]
            },
            {
                name: 'Javascript',
                itemStyle: {
                    color: '#f1e05a'
                },
                children: [
                    {
                        name: 'ExpressJs',
                        value: 1,
                        itemStyle: {
                            color: '#3b813b'
                        }
                    }
                ]
            },
            {
                name: 'Python',
                itemStyle: {
                    color: '#336994'
                },
                children: [
                    {
                        name: 'FastAPI',
                        value: 1,
                        itemStyle: {
                            color: '#336a94'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Other',
        itemStyle: {
            color: '#2A4759'
        },
        children: [
            {
                name: 'Python',
                itemStyle: {
                    color: '#336994'
                },
                children: [
                    {
                        name: 'Pandas',
                        value: 1,
                        itemStyle: {
                            color: '#2e5f85'
                        }
                    },
                    {
                        name: 'NumPy',
                        value: 1,
                        itemStyle: {
                            color: '#295476'
                        }
                    },
                    {
                        name: 'Matplotlib',
                        value: 1,
                        itemStyle: {
                            color: '#244a68'
                        }
                    },
                    {
                        name: 'FastAPI',
                        value: 1,
                        itemStyle: {
                            color: '#244a68'
                        }
                    }
                ]
            },
            {
                name: 'CI / CD',
                itemStyle: {
                    color: '#da4127'
                },
                children: [
                    {
                        name: 'Gitlab',
                        value: 1,
                        itemStyle: {
                            color: '#f5670a'
                        }
                    }
                ]
            },
            {
                name: 'Docker',
                itemStyle: {
                    color: '#399ce8'
                }
            },
            {
                name: 'C++',
                itemStyle: {
                    color: '#6295cb'
                }
            },
            {
                name: 'Supabase',
                itemStyle: {
                    color: '#33ac75'
                }
            },
            {
                name: 'Database',
                itemStyle: {
                    color: '#0d236a'
                },
                children: [
                    {
                        name: 'PostgreSQL',
                        value: 1,
                        itemStyle: {
                            color: '#31648d'
                        }
                    },
                    {
                        name: 'MySQL',
                        value: 1,
                        itemStyle: {
                            color: '#065c87'
                        }
                    }
                ]
            },
        ]
    },
];
const option = ref<ECOption>({
    title: {
        text: 'Graph of My Knowledge',
        subtext: 'Depend on needs, mostly i can do everything',
        textStyle: {
            fontSize: 14,
            color: 'oklch(72.3% 0.219 149.579)',
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
    },
    series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
            focus: 'ancestor'
        },
        levels: [
            {},
            {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            },
            {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            },
            {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }
        ]
    }
})
</script>

<template>
    <VChart :option="option" style="height: 100%;" :autoresize="true" />
</template>
