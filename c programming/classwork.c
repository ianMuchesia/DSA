#include <stdio.h>
#include<stdlib.h>


struct Node
{
    int data;
    struct Node *link;

};





void prependNode(struct Node *head)
{
    int value;
    struct Node *temp = NULL;
    temp = (struct Node *)malloc(sizeof(struct Node));
    printf("please input value that you want to prepend");
    scanf("%d",&value);
    temp->data = value;

 
    if(head == NULL)
    {
        head = temp;
        
    }else{
           struct Node *tempNode = head;
           temp->link = tempNode;
           head = temp;
           free(tempNode);

    }
    free(temp);


}

void getSize()
{

    //struct Node *head = NULL;

    //all

}


void print(struct Node *head){

    if(head == NULL)
    {
        printf("The linked list is empty");
        return;
    }

    while(head != NULL)
    {
        printf("node value is:  %d", head->data);
        head = head->link;
    }

}

int main()
{

    struct Node *head = NULL;

    head = malloc(sizeof(struct Node));

    head->data = 24;
    head->link = NULL;



    prependNode(head);
    print(head);

    return 0;
}