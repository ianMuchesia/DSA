#include<stdio.h>
#include <string.h>

int main() {
    
    char str1[50] = "Good morning";
    char str2[] = "Welcome to kabarak university";

     strcat(str1 , str2);


    int length = strlen(str1);

    printf("%d", length);
    return 0;
}
