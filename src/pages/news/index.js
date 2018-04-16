import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import RouteWithSubRoutes from '@/components/routeWithSubRoutes';
import newsStyles from './news.scss';

class News extends Component {
    // 构造行数
    constructor(props) {
        super(props);
        // 轮播属性设置
        const swipeOptions = {
            auto: 3000,
            transitionEnd: (index) => {
                this.setState({
                    swiperIdx: index
                });
            }
        };
        this.state = {
            swiperIdx: 0,
            swiperNums: 0,
            topNews: null,
            // 设置reactSwiper标签属性之
            swiperAttrs: {
                ref: (swiper) => {
                    if (swiper) {
                        this.swiper = swiper;
                        this.setState({
                            swiperIdx: swiper.getPos(),
                            swiperNums: swiper.getNumSlides()
                        });
                    }
                },
                className: newsStyles.newsSwipe,
                swipeOptions
            }
        };
        this.initTopNews = this.initTopNews.bind(this);
        this.getPosTags = this.getPosTags.bind(this);
    }
    componentWillMount() {
        if (this.props.match.path === '/news') {
            this.props.history.replace('/news/features');
        }
        this.initTopNews();
    }
    // 设置轮播图中活动点
    getPosTags() {
        const pos = [];
        for (let i = 0; i < this.state.swiperNums; i += 1) {
            pos.push(<span key={i} className={i === this.state.swiperIdx ? newsStyles.active : ''} ></span>);
        }
        return pos;
    }
    // 初始化顶部新闻
    async initTopNews() {
        console.log(this);
        try {
            // 获取顶部轮播新闻数据
            const res = await this.props.root.apis.news({
                pageNo: 1,
                pageSize: 3,
                newsType: 1
            });
            if (res.success) {
                this.setState({
                    topNews: res.data.data
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const png = 'http://img1.imgtn.bdimg.com/it/u=3115593769,3840792280&fm=27&gp=0.jpg';
        return (<div style={{ fontSize: 0 }}>
            {this.state.topNews ? <ReactSwipe {...this.state.swiperAttrs} >
                {this.state.topNews.map((item, i) => <div key={i}>
                    <img src={png} alt="t" />
                    <div className={newsStyles.swipeContent}>
                        <h3>{item.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.subTitle }} />
                    </div>
                </div>)}
            </ReactSwipe> : ''}
            <div className={newsStyles.swiperPos}>
                {this.getPosTags()}
            </div>
            {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>);
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return state;
}
// Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//             onIncreaseClick: () => dispatch(increaseAction)
//     }
// }

export default connect(mapStateToProps)(News);
