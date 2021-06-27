# Assignment-2
Assignment 2 of Android club
The objective of this assignment is to implement the playist https://www.youtube.com/playlist?list=PLy9JCsy2u97kphtlKAAMogqZnEt2L0NhD
\
\
This playlist contains basics of stack and tab navigations which we should perform 
\
\
In my app I have 3 screens as of now : Home,Lobby and Settings 
As we have to use 2 types of navigation for this assignment I have used stack navigation to go to lobby screen and bottom tab navigation for settings screen
\
\
For this process we need to install some important requirements using the codes shown below:
npm install @react-navigation/native ( To install react navigation)
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack (To implement stack navigation)
npm install @react-navigation/bottom-tabs (To implement tab navigation)
\
\
The sign in button is implemented using stack navigation and takes the user to the lobby screen of the app as shown in the following 2 screenshots
![image](https://user-images.githubusercontent.com/84237347/123542408-1b9fe880-d767-11eb-89a0-f90841febbd2.png)
![image](https://user-images.githubusercontent.com/84237347/123542432-48540000-d767-11eb-9360-03f31d5df740.png)
\
\
\
However for the settings screen we used tab navigation only and it can only be accessed from the bottom tab labelled as settings . The following screenshots shows the settings screen (which is also highlighted in the bottom tab)
\
\
![image](https://user-images.githubusercontent.com/84237347/123542540-c44e4800-d767-11eb-8127-f1d5ff12fbd7.png)

