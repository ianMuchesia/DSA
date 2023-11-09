#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node()
    {

        data = 0;
        next = NULL;
    }

    Node(int d)
    {

        data = d;
    }
};

class SinglyLinkedList
{
public:
    Node *head;
    int size;
    SinglyLinkedList()
    {
        head = NULL;
        size = 0;
    }
    SinglyLinkedList(Node *n)
    {
        head = n;
    }

    // Node Exists data value
    Node *nodeExists(int d)
    {
        Node *temp = NULL;

        Node *ptr = this->head;
        while (ptr != NULL)
        {
            if (ptr->data == d)
            {
                temp = ptr;
            }
            ptr = ptr->next;
        }

        return temp;
    }

    bool isEmpty()
    {
        return this->size == 0;
    }

    // 3. append node to the list
    void appendNode(Node *n)
    {

        Node *ptr = this->head;
        if (this->isEmpty())
        {
            ptr = n;
        }
        else
        {

            cout<<ptr->data<<endl;
            while (ptr->next != NULL)
            {

                ptr = ptr->next;
            }

           
            ptr->next = n;
           
        }
        this->size++;
         cout << "node appended" << endl;
    }

    // prepend Node
    void prependNode(Node *n)
    {
        Node *ptr = this->head;

        if (this->isEmpty())
        {
            ptr = n;
        }
        else
        {
            n->next = ptr;
        }
        this->size++;
        cout<<"Prepend operation succesfully"<<endl;
    }

    // insert a Node;

    void insertNode(Node *n, int index)
    {

        int currentIndex = 0;
        Node *ptr = this->head;
        if (index < 0 || index > this->size - 1)
        {
            cout << "invalid index" << endl;
            return;
        }

        if (index == 0)
        {
            return this->prependNode(n);
        }
        else if (index == (this->size - 1))
        {
            return this->appendNode(n);
        }
        else
        {
            while (currentIndex != (index - 1))
            {

                ptr = ptr->next;
                currentIndex++;
            }
            n->next = ptr->next;
            ptr->next = n;
            cout << "Inserted " << endl;
        }
    }

    // delete a node
    void deleteNode(int index)
    {
        int currentIndex = 0;
        if (this->isEmpty())
        {
            cout << "singly list empty" << endl;
            return;
        }
        if (index < 0 || index > this->size - 1)
        {
            cout << "invalid index" << endl;
            return;
        }
        if (this->size == 1)
        {
            this->head = NULL;
            this->size = 0;
            return;
        }

        if (index == 0)
        {
            this->head = this->head->next;
        }
        else
        {

            Node *ptr = this->head;
            Node *fast = ptr->next;

            while (currentIndex != (index - 1))
            {

                ptr = ptr->next;
                currentIndex++;
            }
            ptr->next = fast->next;
        }
        this->size--;

        cout << "node deleted at the given index" << endl;
    }

    void printList()
    {
        if (this->isEmpty())
        {
            cout << "list is empty" << endl;
            return;
        }
        else
        {
            Node* temp = this->head;

            while (temp != NULL)
            {
                cout << temp->data << "->";
                temp = temp->next;
            }
        }
    }
};

int main()
{
    SinglyLinkedList s;
    Node *n1 = new Node(1);
    Node *n2 = new Node(2);

    s.appendNode(n1);
    s.appendNode(n2);
   

    return 0;
}