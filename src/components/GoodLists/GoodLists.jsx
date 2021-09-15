import './style.scss'

export default {
    props: {
        goodLists: {
            type: Array
        }
    },
    render() {
        return (
            <div >
                {this.goodLists.map(v =>
                (<div class="good_lists">
                    <div class="good_lists_img">
                        <div class="img"></div>
                    </div>
                    <div class="good_lists_content">
                        <div class="name">{v?.goodName}</div>
                        <div class="num">数量：{v?.goodNum}</div>
                    </div>
                    <div class="good_lists_price">￥{v.goodPrice}</div>
                </div>
                )
                )}
            </div>
        )
    }
};
// <template>
//   <div>
//     <div
//       class="good_lists"
//       v-for="goodList in goodLists"
//       :key="goodList.goodName"
//     >
//       <div class="good_lists_img">
//         <div class="img"></div>
//       </div>
//       <div class="good_lists_content">
//         <div class="name">{{ goodList.goodName }}</div>
//         <div class="num">数量：{{ goodList.goodNum }}</div>
//       </div>
//       <div class="good_lists_price">￥{{ goodList.goodPrice }}</div>
//     </div>
//   </div>
// </template>