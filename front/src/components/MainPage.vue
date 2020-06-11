<template>
  <v-container> 
    <v-row class="text-center">
      <v-col cols="12">
      <h1>Smart Jack</h1>
      </v-col>
      <v-col cols="12">
      <p>안녕하세요! 정대윤입니다. 기술스택을 보니 vue가 있어 vue와 UI 라이브러리 vuetify를 이용해 구현해 보았습니다.</p>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="60%"
        >
          <v-card-text >
            <p class="display-1 text--primary">
              이미지를 넣어 주세요!
            </p>
            <v-file-input
              v-model="image"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              text
              class="text-center"
              color="deep-purple accent-4"
              @click="uploadClick()"
            >
              업로드
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
            <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="60%"
        >
          <v-card-text >
            <p class="display-1 text--primary">
              입력한 이미지를 불러올 수 있습니다.
            </p>
                <v-list shaped>
                  <div v-if="items.length===0">
                      이미지를 입력하세요!
                    </div>
                  <v-list-item-group v-else  color="primary">
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      @click="getImageURL(i)"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="60%"
        >
         <v-card-text >
           <div v-if="imgURL===''">
             이미지를 눌러 주세요.
           </div>
           <div v-else>
             <v-img :src="imgURL" />
           </div>
         </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';

  const encodeBase64ImageFile=(image)=>{
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (event) => {
        resolve(event.target.result)
      }
      reader.onerror = (error) => {
        reject(error)
      }
    })
  }

  export default {
    name: 'HelloWorld',

    data: () => ({
      image:null,
      items: [],
      imgURL: '',
    }),
    methods:{
      uploadClick(){
        if(!this.image){
          alert('이미지를 입력 버튼을 눌러 주세요!');
          return;
        }
        if(this.image.name.includes(' ')){
          alert('이미지 이름에 공백을 없애 주세요!');
          return;
        }
        console.log(this.image.name);
        console.log(this.image.type);
        encodeBase64ImageFile(this.image)
        .then((data) => {
          console.log(data);
          axios
          .post('http://localhost:3030/api/image',{
            name: this.image.name,
            type: this.image.type,
            value: data
          })
          .then(response=>{
            console.log(response);
            this.items.push(response.data.name);
          })
          .catch(e=>{
            console.error(e);
          })
        });
      },
      getImageURL(index){
        axios
        .get(`http://localhost:3030/api/image/${this.items[index]}`)
        .then(response=>{
          console.log(response.data.imageURL);
          this.imgURL = response.data.imageURL;
        })
        .catch(e=>{
          console.error(e);
        })
      }
    }
  }
</script>
