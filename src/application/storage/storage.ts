import { AsyncStorage } from "../async-storage";
      console.log('B')

export const storage = {
  currentUser: new AsyncStorage('currentUser')
}
