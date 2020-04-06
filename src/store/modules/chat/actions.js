// import { chatService } from "../../../services/chat.services";

// const actions = {
//     GetMessages : async ({commit}) => {
//         await chatService
//           .GetGroupMessage(this.$store.state.Chat.GROUP_DETAILS._id)
//           .then(res => {
//             this.$store.commit("SET_GROUP_MESSAGE", res);
//           })
//           .catch(() => {
//             this.$store.commit("SET_GROUP_MESSAGE", []);
//             //this.$toastr.e(err.message || err, "Couldn't Fetch");
//           })
//           .finally(() => {
//             this.loading = false;
//           });
//       },
// }


// export { actions };